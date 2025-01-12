import React from 'react'
import Card from "./Card"
function Cards() {
  var content = [
    {header:"Up Next: Culture ", title:"Who we are"},
    {header:"Get in Touch ", title:"Let's get to it."}
  ]
  return (
    <div className='max-w-screen-xl mx-auto flex gap-1'>
        <Card width={"basis-1/3"} start={false} para={true} title={content[0].title} header={content[0].header}/>
        <Card width={"basis-2/3"} start={true} para={false} title={content[1].title} header={content[1].header} hover="true"/>
    </div>
  )
}

export default Cards