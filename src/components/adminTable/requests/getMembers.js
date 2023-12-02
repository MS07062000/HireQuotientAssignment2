export async function fetchMembers() {
  const response = await fetch(
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
  );
  const members = await response.json();
  return members;
}
