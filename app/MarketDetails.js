const marketDetailsList=[
    {id:1,
        companyImg:"https://bsmedia.business-standard.com/_media/bs/img/hp/home-page/2023-07/01/9343/full/1681109962-4984.png",
        message:"Lorem Ipsum is simply duumy text of printing and typesetting industry. Lorem ipsum is"
    },
    {id:2,
        companyImg:"https://bsmedia.business-standard.com/_media/bs/img/hp/home-page/2023-07/01/9343/full/1681109962-4984.png",
        message:"Lorem Ipsum is simply duumy text of printing and typesetting industry. Lorem ipsum is",
    },
    {id:3,
        companyImg:"https://bsmedia.business-standard.com/_media/bs/img/hp/home-page/2023-07/01/9343/full/1681109962-4984.png",
        message:"Lorem Ipsum is simply duumy text of printing and typesetting industry. Lorem ipsum is",
    },
    {id:4,
        companyImg:"https://bsmedia.business-standard.com/_media/bs/img/hp/home-page/2023-07/01/9343/full/1681109962-4984.png",
        message:"Lorem Ipsum is simply duumy text of printing and typesetting industry. Lorem ipsum is",
    },
    {id:5,
        companyImg:"https://bsmedia.business-standard.com/_media/bs/img/hp/home-page/2023-07/01/9343/full/1681109962-4984.png",
        message:"Lorem Ipsum is simply duumy text of printing and typesetting industry. Lorem ipsum is",
    },
    {id:6,
        companyImg:"https://bsmedia.business-standard.com/_media/bs/img/hp/home-page/2023-07/01/9343/full/1681109962-4984.png",
        message:"Lorem Ipsum is simply duumy text of printing and typesetting industry. Lorem ipsum is",
    }
]

export default function MenuBar() {
    const renderCompanyDescription=(eachItem)=>{
        const {message,companyImg}=eachItem
        return (
            <li className="w-1/2">
                <img src={companyImg} alt="company" className="rounded-xl h-40"/>
               <p className="font-bold text-slate-500">{message}</p>
            </li>
        )
    }
    return (
        <div className="w-full sm:w-2/5">
            <h1 className="font-semibold text-red-600 text-xl mb-2 hidden lg:contents">Market Stories</h1>
            <ul className="mt-12 flex flex-wrap max-h-96 overflow-y-scroll">
                {
                  marketDetailsList.map(eachItem=>(renderCompanyDescription(eachItem,eachItem.id)))
                }
            </ul>
        </div>
    )
  }