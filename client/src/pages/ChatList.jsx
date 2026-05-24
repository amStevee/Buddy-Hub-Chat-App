import ChatCard from "@/components/chatCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";

export default function ChatList() {
  const name = "Name";
  const avatar = "avatar";
  return (
    <div className="flex flex-col p-6 gap-5">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-primary">Chats</h1>
        <Avatar className="h-14 w-14">
          <AvatarImage src={avatar} />
          <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
        </Avatar>
      </div>

      <InputGroup className="bg-fuchsia-100 p-5">
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>

      <ChatCard
        name="Ron Harry"
        message="Hi, how are you"
        time="now"
        unread={1}
        avatar="https://i.pravatar.cc/150?img=12"
      />

      <ChatCard
        name="Ron Harry"
        message="Hi, how are you"
        time="now"
        unread={1}
        avatar="https://i.pravatar.cc/150?img=12"
      />
    </div>
  );
}
