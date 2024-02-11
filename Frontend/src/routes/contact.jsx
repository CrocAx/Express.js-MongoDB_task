import {
  Form, 
  useLoaderData,
  useFetcher,
 } from "react-router-dom";
import { getContact, updateContact } from "../contacts.js";

// Loader function to fetch contact data based on the contactId parameter
// eslint-disable-next-line react-refresh/only-export-components
export async function loader ({ params }) {
  const contact = await getContact(params.contactId);
  if (!contact) {
     // Throw a 404 error if contact is not found
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { contact };
}

// Action function to handle form submission for updating contact information
// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request, params }) {
  let formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}

// React component representing the Contact page
export default function Contact() {
  // Retrieve contact data using useLoaderData
  const { contact } = useLoaderData();
  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || null}
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}
// React component representing the favorite button
function Favorite({ contact }) {
  // Retrieve fetcher and favorite status using useFetcher
  const fetcher = useFetcher();
  let favorite = contact.favorite;
  if (fetcher.formData) {
    favorite = fetcher.formData.get("favorite") === "true";
  }
  
  // Render the favorite button within a form
  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}