import React from "react";

const NotificationsCard = (props) => {
    return (
        <div>
        <a
            href="#"
            className="list-group-item list-group-item-action flex-column align-items-start blue"
        >
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{props.sensorName} SENSOR NAME</h5>
                <small>{props.timeOfNotification} timeOfNotification </small>
            </div>
            <p className="mb-1">
                {props.nameOfNotification} nameOfNotification
            </p>
            <small>{props.descriptionOfNotification} descriptionOfNotification</small>
        </a>
        </div>
    )
};

export default NotificationsCard;