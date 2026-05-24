import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ChatCard({ name, message, time, unread, avatar }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-white p-3 hover:bg-gray-100 transition-colors cursor-pointer">
      <div className="flex items-center gap-3 min-w-0">
        <Avatar className="h-14 w-14">
          <AvatarImage src={avatar} />
          <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
        </Avatar>

        <div className="min-w-0">
          <h2 className="font-semibold text-sm truncate">{name}</h2>

          <p className="text-sm text-gray-500 truncate">{message}</p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2 shrink-0">
        <span className="text-xs text-gray-400">{time}</span>

        {unread > 0 && (
          <div className="h-5 w-5 rounded-full bg-green-500 text-white text-xs flex items-center justify-center">
            {unread}
          </div>
        )}
      </div>
    </div>
  );
}
