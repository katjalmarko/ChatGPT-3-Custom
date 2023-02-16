import { DocumentData } from "firebase/firestore"

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  return (
    <div>
      <div>
        <img src={message.user.avatar} alt="" className="" />
        <p>
          {message.text}
        </p>
      </div>
    </div>
  )
}

export default Message