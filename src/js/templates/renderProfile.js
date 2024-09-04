// import { getProfile } from "../api/profiles/getProfile.mjs";
// import { profileTemplate } from "./profileTemplates.js";

// export async function renderProfile() {

//     try {
//         const url = new URL(location.href);
//         let name = url.searchParams.get("name");

//         const profileData = await getProfile(name);

//      if (profileData) {
//         const container = document.querySelector("#profile");

//         const profileCard = profileTemplate(profileData, container);

//         container.append(profileCard);
//     } else {
//         alert(`No profile with the name ${name}. Please try again.`);
//     }
//  } catch (error) {
//         throw new Error(`Failed to render profile: ${error.message}`);
//     }

// }
