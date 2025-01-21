function MyModal(props) {
    return (
        <div className="modal fade" id={props.id} tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.title}</h5>
                        <button
                            id={props.id + '_btnclose'}
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{props.children}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MyModal;
