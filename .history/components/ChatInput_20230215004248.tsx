type Props = {
  chatId: string;
}

function ChatInput({ chatId }: Props) {
  return (
    <div>
      <form className="p-5 space-x-5 flex-1">
        <input type="text" 
               placeholder="Type your message here..."
        />
      </form>
    </div>
  )
}

export default ChatInput