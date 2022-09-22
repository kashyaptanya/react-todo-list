

function Dialog({onClose, element,handleCancel}) {
    
    return (
        <div className="pop" id="pop">
            <h2>Sure !! you want to <span className="span">Delete</span></h2>
            <div className="btns">

                <button  className="btn btn-danger yes" onClick={() => onClose(element)}>Yes</button>
                <button className="btn btn-primary no" onClick={() => handleCancel()}>No</button>


            </div>
        </div>
    )
}
export default Dialog

