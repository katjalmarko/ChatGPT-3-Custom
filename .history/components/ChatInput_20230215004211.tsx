type Props = {
  chatId: string;
}

function ChatInput({ chatId }: Props) {
  return (
    <div>
      <form className="">
        <input type="text" 
               placeholder="Type your message here..."
        />
      </form>
    </div>
  )
}

export default ChatInput