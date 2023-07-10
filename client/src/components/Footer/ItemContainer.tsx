import { Item } from "./Item"
import {RESOURCES,COMPANY,SUPPORT,} from "./Menus"
export const Items = () => {
  return (
    <div className=" grid grid-cols-3 gap-6 py-3
    place-items-center">
      
      <Item Links = {COMPANY} title ="COMPANY"/>
      <Item Links = {RESOURCES} title ="RESOURCES"/>
      <Item Links = {SUPPORT} title ="SUPPORT"/>
    </div>
  )
}
