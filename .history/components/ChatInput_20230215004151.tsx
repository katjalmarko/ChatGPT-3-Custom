type Props = {
  chatId: string;
}

function ChatInput({ chatId }: Props) {
  return (
    <div>
      <form>
        <input type="text" 
               placeholder=""
        />
      </form>
    </div>
  )
}

export default ChatInput