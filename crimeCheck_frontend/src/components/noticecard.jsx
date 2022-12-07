export const NoticeCard = ({ele})=>{

    return (
        <div className="allNotice">
            <div>
                <p>{ele.notices}</p>
            </div>
            <div className="userdate">
                <p>{ele.userID.user}</p>
                <p>{ele.createdAt}</p>
            </div>
        </div>
    )
}