import { DocumentData } from "firebase/firestore"

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  return (
    <div>
      <div>
        <p>
          {message.text}
        </p>
      </div>
    </div>
  )
}

export default Message