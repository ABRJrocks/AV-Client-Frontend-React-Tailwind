import React, { useState, useEffect, useRef } from "react";
import "./mainPage.css";
import ChatHistory from "../assets/chatHistory.svg";
import Send from "../assets/send.svg";
import Del2 from "../assets/del2.svg";
import Logout from "../assets/logoff.svg";
import User from "../assets/user.png";
import Assistant from "../assets/assistant.svg";
import Filter from "../assets/filter.svg";
import History from "../assets/history.png";
import { Link } from "react-router-dom";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const endOfMessages = useRef(null);
  const [show, setShow] = useState(true);
  const [loading, setLoadin] = useState(false);

  const showPrevConvo = () => {
    const preConver = true;
  };

  const clearMessages = () => {
    setMessages([]);
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, isUser: true }]);
    setLoadin(true);
    setInput("");

    fetch(
        `https://infinite-retreat-73092-419cad09f4c1.herokuapp.com/va/response/${input}`
      )
    //   `https://jsonplaceholder.typicode.com/todos/${input}`
    // )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to get a response from the server.");
        }
        setLoadin(false);
        return response.text();
      })
      .then((data) => {
        setLoadin(false);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: data, isUser: false },
        ]);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        setLoadin(false);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Sorry, an error occurred.", isUser: false },
        ]);
      });
  };

  useEffect(() => {
    endOfMessages.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const Examples = [
    "Suggest me a solution for a medium sized room",
    "Hshow me some cheapest screens  available",
    // "How long it takes to become good coder?",
    // "Is Angular better than React?",
    // "Why people communicate less these days?",
    // "Are you ChatGPT or AV?",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5] md:flex-row">
      <div className="w-full md:w-[30%] h-[30%] md:h-screen bg-[#eeeeee] p-4 md:p-12">
        <div className="py-2 border-b-2 text-lg md:text-xl font-semibold border-[#89AFCC] text-left md:text-left">
          Recent Activity
        </div>
        {show ? (
          <div className="p-3 mt-4 rounded-md h-[40%] md:h-[50%] overflow-y-clip hide-scrollbar " />
        ) : (
          <div className="p-3 mt-4 rounded-md h-[40%] md:h-[50%] hover:overflow-y-scroll overflow-y-clip hide-scrollbar ">
            <div className="flex flex-row rounded-[10px] md:items-center mt-2">
              <div className="leftShape basis-1/10"></div>
              <p className="text-[18px] ml-3  basis-3/4  cursor-pointer">
                This is my chat History
              </p>
              <span className="cursor-pointer ml-5 w-[18px] basis-1/10">
                <img src={ChatHistory}></img>
              </span>
              <span className="cursor-pointer ml-2 w-[18px] basis-1/10">
                <img src={Del2}></img>
              </span>
            </div>
            {/* {[1, 2, 3, 4, 5, 6, 7, 9, 22, 44].map((item, index) => (
            <div className="flex flex-row mt-3 border-b-[1px] border-[#E6E6E6]">
              <p className="text-[18px] ml-3 basis-4/5 cursor-pointer">
                This is my Chat History
              </p>
              <span className=" w-[16px] ml-5 mt-1 basis-1/5">
                <p className="text-[12px] text-[#929292]">1:22 PM</p>
              </span>
            </div>
          ))} */}
          </div>
        )}

        <div className="h-[30%] md:h-[10%] mt-5">
          <div className="text-[18px] font-[600] mt-[20%]">
            <div onClick={() => setShow(!show)} className="flex flex-row">
              {show ? (
                <p className=" ml-3  basis-3/4 cursor-pointer hover:text-[#000000]">
                  Show Previous Conversations
                </p>
              ) : (
                <p className=" ml-3  basis-3/4 cursor-pointer hover:text-[#000000]">
                  Hide Previous Conversations
                </p>
              )}
              <span className="cursor-pointer w-[20px] mt-1 basis-1/10">
                <img src={History}></img>
              </span>
            </div>
            <div className="flex flex-row">
              <p className=" ml-3  basis-3/4 cursor-pointer">
                Delete Conversations
              </p>
              <span className="cursor-pointer w-[20px] mt-1 basis-1/10">
                <img src={Del2}></img>
              </span>
            </div>
            <Link to="/" className="text-[#4F4F4F] hover:text-[#000000]">
              <div className="flex flex-row">
                <p className="ml-3 basis-3/4 cursor-pointer logout">Logout</p>
                <span className="cursor-pointer w-[20px] mt-1 basis-1/10 logout">
                  <img src={Logout} alt="Logout"></img>
                </span>
              </div>
            </Link>
          </div>
          <div>
            <button
              onClick={clearMessages}
              className="w-[100%] h-[55px] mt-8 text-white border rounded-[10px] bg-[#4cb469] hover:bg-[#61d381] cursor-pointer"
            >
              + New chat
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[70%]">

            {/* Rendering two messages funcitons to show animation as well. */}

        {messages.length > 0 ? (
          <div className="h-[80vh] overflow-y-scroll pt-8">
            {loading ? (
              <div>
                <div>
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`w-[75%] mx-auto p-6 flex items-center ${
                        message.isUser === true && "flex-row-reverse "
                      }`}
                    >
                      {message.isUser === true ? (
                        <img
                          className="ml-5 w-[36px] shadow-md rounded-full"
                          src={User}
                        ></img>
                      ) : (
                        <img
                          className=" mr-5 w-[36px] shadow-md rounded-full"
                          src={Assistant}
                        ></img>
                      )}
                      <div
                        className={`leading-loose p-6 ${
                          message.isUser === false
                            ? "bg-white shadow-md rounded-[10px]"
                            : " text-white bg-[#4cb469] rounded-[10px] shadow-md"
                        }`}
                      >
                        <div>{message.text}</div>
                        <div ref={endOfMessages} />
                      </div>
                    </div>
                  ))}
                </div>

                <div class=" bg-white shadow-md rounded-[10px] p-4 max-w-sm w-full ml-[15%] h-[90px]">
                  <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                    <div class="flex-1 space-y-2 py-1">
                      <div class="h-2 bg-slate-200 rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                          <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`w-[75%] mx-auto p-6 flex items-center ${
                      message.isUser === true && "flex-row-reverse "
                    }`}
                  >
                    {message.isUser === true ? (
                      <img
                        className="ml-5 w-[36px] shadow-md rounded-full"
                        src={User}
                      ></img>
                    ) : (
                      <img
                        className=" mr-5 w-[36px] shadow-md rounded-full"
                        src={Assistant}
                      ></img>
                    )}
                    <div
                      className={`leading-loose p-6 ${
                        message.isUser === false
                          ? "bg-white shadow-md rounded-[10px]"
                          : " text-white bg-[#4cb469] rounded-[10px] shadow-md"
                      }`}
                    >
                      <div>{message.text}</div>
                      <div ref={endOfMessages} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="h-[80%] border flex flex-col justify-center items-center ">
            <div className="text-4xl bold mb-8">AV</div>
            <div className="flex flex-wrap justify-around gap-4 max-w-[900px]">
              {Examples.map((items, index) => (
                <div className="text-lg p-4 border-2 rounded cursor-pointer mt-4 min-w-[400px] hover:bg-[#eeeeee]">
                  {items}
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="h-[20%] ">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="w-[70%]  flex justify-center items-center relative">
              <span className="relative w-[24px] left-9">
                <img className="" src={Filter}></img>
              </span>
              <button className=" text-white h-[50px] mr-[25px] w-[115px] pl-[25px] border rounded-[10px] bg-[#346D7A] hover:bg-[#4d8f9e] cursor-pointer">
                Filter
              </button>
              <textarea
                type="text"
                className="border w-full pr-[60px] resize-none  text-[14px] pt-4 pl-4 shadow-md bg-white rounded-[10px]"
                placeholder="Enter your query here."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></textarea>
              <span
                onClick={handleSend}
                className="w-[32px] absolute right-5 top-5 cursor-pointer"
              >
                <img src={Send}></img>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat;
