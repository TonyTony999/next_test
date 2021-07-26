import {useRouter} from "next/router";

function something(){
    const router=useRouter();
    console.log(router.query.newsId)
    const newsId=router.query.newsId

    return (
        <h1>{newsId}</h1>
    )
    }
    
    export default something;

    