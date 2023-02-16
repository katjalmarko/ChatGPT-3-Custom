import { DocumentData } from "firebase/firestore"

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  return (
    <div>
      <div>
        <img src={message.user.avatar} alt="" className="h-8 w-8" />
        <p>
          {message.text}
        </p>
      </div>
    </div>
  )
}

export default Message