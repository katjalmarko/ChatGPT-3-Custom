

import { useSession } from "next-auth/react"
import NewChat from "./NewChat"

function SideBar() {
  const {} = useSession();

  return (
    <div className="p-2 flex flex-col h-screen">
    <div className="flex-1">
        <div>
          <NewChat />

          <div>
          {/* ModelSelection */}
          </div>

          {/* Map through the ChatRows*/}  
        </div>
      </div>
    </div>
  )
}

export default SideBar