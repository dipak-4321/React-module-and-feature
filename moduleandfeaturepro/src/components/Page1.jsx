
import Navbar from "./navbar"
import Page1content from "./Page1content"

const Page1 = (props)=> {
  return (
    <div className="px-12 pt-8 pb-28 h-screen w-full">
    <Navbar />
    <Page1content users={props.users} />


    </div>
  )
}
export default Page1