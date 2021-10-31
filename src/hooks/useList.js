import {useState} from 'react'

function UseList(init){
    const [list, setList] = useState(init);
    const [editable, setEditable] = useState(false)
    return {
        list,
        editable,
        removeItem(name){
            setList((prvState) => {
                const filteredList = prvState.filter((list) => list.name != name);
                return filteredList;
              })
        },
        HandleEdit(name,event){
            if (event.key==="Enter") {
                setEditable(false);
                const copyList = [...list];
                const newList =[]
                copyList.map((lst)=>{
                  if(lst.name== name){
                    lst.name = event.target.value
                  }
                  newList.push(lst)
                })
                setList(newList);
              } 
        },
        handleCalory(){
            setList((prvState) => {
                const filteredList = prvState.filter((list) => list.calorie <= 50);
                return filteredList;
              })
        },
        changeEdit(){
            setEditable(true)
          }
    }
}

export default UseList; 