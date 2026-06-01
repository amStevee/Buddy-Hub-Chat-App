import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Card, CardContent } from "@/components/ui/card";

import { Send, Phone, Video, MoreVertical, Paperclip } from "lucide-react";

export default function ChatPage() {
  const messages = [
    {
      id: 1,
      sender: "other",
      name: "Sarah",
      text: "Hey Steve 👋",
      time: "10:20 AM",
    },
    {
      id: 2,
      sender: "me",
      text: "Hello. How are you?",
      time: "10:22 AM",
    },
  ];

  return (
    <div className="h-screen bg-muted/40 flex items-center justify-center p-4">
      <Card className="w-full max-w-5xl h-[90vh] overflow-hidden">
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="hidden md:flex w-[320px] border-r bg-background flex-col">
            {/* Sidebar Header */}
            <div className="p-5 border-b">
              <h1 className="text-2xl font-bold">Chats</h1>

              <Input
                placeholder="Search messages..."
                className="mt-4 rounded-xl"
              />
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {[1, 2, 3, 4].map((item) => (
                <button
                  key={item}
                  className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-muted transition"
                >
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?img=12" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>

                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold">Sarah</h2>

                      <span className="text-xs text-muted-foreground">
                        10:23
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground truncate">
                      Last message preview...
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Section */}
          <div className="flex-1 flex flex-col bg-background">
            {/* Top Header */}
            <div className="border-b px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-11 w-11">
                  <AvatarImage src="https://i.pravatar.cc/150?img=12" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>

                <div>
                  <h2 className="font-semibold text-lg">Sarah Johnson</h2>

                  <p className="text-sm text-green-500">Online</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Phone size={18} />
                </Button>

                <Button variant="ghost" size="icon" className="rounded-full">
                  <Video size={18} />
                </Button>

                <Button variant="ghost" size="icon" className="rounded-full">
                  <MoreVertical size={18} />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-muted/20">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[75%] rounded-3xl px-5 py-3 shadow-sm ${
                      message.sender === "me"
                        ? "bg-primary text-primary-foreground"
                        : "bg-background border"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>

                    <span
                      className={`text-[11px] mt-2 block ${
                        message.sender === "me"
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {message.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t p-4 bg-background">
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Paperclip size={18} />
                </Button>

                <Input
                  placeholder="Type a message..."
                  className="rounded-2xl h-12"
                />

                <Button className="rounded-2xl h-12 px-5">
                  <Send size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
