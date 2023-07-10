import { Item } from "./Item"
import {RESOURCES,COMPANY,SUPPORT,} from "./Menus"
export const Items = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-2 py-3">
      
      <Item Links = {COMPANY} title ="COMPANY"/>
      <Item Links = {RESOURCES} title ="RESOURCES"/>
      <Item Links = {SUPPORT} title ="SUPPORT"/>
    </div>
  )
}
