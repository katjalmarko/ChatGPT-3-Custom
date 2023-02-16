'use client'

import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";

type Props = {
  chatId: string;
};

function Chat({ chatId }: Props) {

  const { data: session } = useSession();

  const [messages] = useCollection

  return (
    <div className="flex-1">
      
    </div>
  )
}

export default Chat