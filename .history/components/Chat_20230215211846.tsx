'use client'

import { useSession } from "next-auth/react";

type Props = {
  chatId: string;
};

function Chat({ chatId }: Props) {

  const { data: session } = useSession();

  const

  return (
    <div className="flex-1">
      
    </div>
  )
}

export default Chat