import React, { useEffect, useState } from "react";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch("http://api.wedeazzy.com/api/Message/")
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        console.log(messages, "messages");
      });
  }, []);
  return (
    <div>
      {" "}
      <div>
        <div className="p-3">
          <h2 className="text-primary text-xl bg-[#f3f8f9] px-2 py-3 font-semibold">
            Messages{" "}
          </h2>
          <div className="flex justify-between items-center">
            <div>
              <label htmlFor="show">Show</label>
              <input type="number" className="border-4 mx-1 rounded-sm  w-20" />
              <span>entries</span>
            </div>
            <div class=" flex items-center ">
              <label htmlFor="search">Search</label>
              <input
                type="text"
                placeholder="Search"
                class="input input-bordered ml-2"
                id="search"
              />
            </div>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="table table-compact w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th> Email </th>
                <th>Date</th>
                <th>Subject</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message) => (
                <tr key={message?.id}>
                  <td>{message?.id}</td>
                  <td>{message?.Name}</td>
                  <td>{message?.Email}</td>
                  <td>{message?.created_at}</td>
                  <td>{message?.Subject}</td>
                  <td>{message?.Your_Message}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th> Email </th>
                <th>Date</th>
                <th>Subject</th>
                <th>Message</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Messages;
