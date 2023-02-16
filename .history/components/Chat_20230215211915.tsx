'use client'

import { query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";

type Props = {
  chatId: string;
};

function Chat({ chatId }: Props) {

  const { data: session } = useSession();

  const [messages] = useCollection(session && query())

  return (
    <div className="flex-1">
      
    </div>
  )
}

export default Chat