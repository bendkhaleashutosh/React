import React, { Component } from 'react'

class MyColorsCopm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            colors: [
                { id: 1, name: "Red" },
                { id: 2, name: "Green" },
                { id: 3, name: "Blue" },
                { id: 4, name: "White" },
                { id: 5, name: "Black" }
            ],
            emp:[
                {id:101,name:"Rahul",post:"Fullstack Developer",salary:95000},
                {id:102,name:"Anmol",post:"Mern stack Developer",salary:97000},
                {id:103,name:"Radha",post:"Java Developer",salary:81000},
                {id:104,name:"Swati",post:"Python Developer",salary:95000},
                {id:105,name:"Ajay",post:"MEAN Developer",salary:94000},
            ]
        }
    }

    render() {
        const { colors,emp } = this.state;
        return (
            <div>
                <h1 className='text-primary bg-danger'>My Colors</h1>
                <ol>
                    {
                        // colors.lenght>0 &&
                        // colors.map((val,index)=>{
                        //     return<li key={index}>{val.name}</li>
                        // })
                       colors.length > 0 && colors.map((val) => {
                            return <li key={val.id} style={{color:(val.id%2==0)?"green":"red"}}>{val.name}</li>
                        })
                    }
                </ol>
                <hr/>
                <table className='table table-hover table-striped table-dark table-bordered'>
                    <thead>
                        <tr className='table-primary'>
                            <th>Id</th><th>Name</th><th>Post</th><th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            emp.map((val,index)=>{
                                return <tr key={index}>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.post}</td>
                                    <td>{val.salary}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MyColorsCopm
