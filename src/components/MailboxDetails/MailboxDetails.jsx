import { useParams } from "react-router";

const MailboxDetails = (props) => {

    const { mailboxId } = useParams()

    const singleMailbox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ));

    return (
        <>
            <h1>Mailbox {singleMailbox._id}</h1>

            <h2>Details</h2>
            <dl>
                <dt>
                    Boxholder: {singleMailbox.boxOwner}
                </dt>
                <dt>
                    Box Size: {singleMailbox.boxSize}
                </dt>
            </dl>
        </>
    )
}

export default MailboxDetails;