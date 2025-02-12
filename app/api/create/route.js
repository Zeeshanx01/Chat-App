
import { StreamChat } from "stream-chat";
import { clerkClient } from '@clerk/nextjs/server'

// Define values.
const api_key = 'fuzhd5ak3fcu';
const api_secret = 'cdcn5bv75wkjnbbqtq343zp99vcarnv6jndx3ydgyw9abcbwfcw28e4bmc6vhhbn';
// const user_id = "user_2saAm3PI72l76GpPWXSVbFlAGJE";



export async function POST(request) {
  // Initialize a Server Client
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json()
  const token = serverClient.createToken(user.data.id);
  // Create User Token
  // console.log(token);

  await serverClient.upsertUser({ id: user.data.id })

  const client = await clerkClient()

  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token: token
    },
  })

  const slugs = ['python-new', 'javascript-new', 'react', 'node.js', 'machine%20learning', 'devops']
  slugs.forEach(async (item) => {
    const channel = serverClient.channel('messaging', item, {
      image: 'https://getstream.io/random_png/?name=react',
      name: item + ' Disscussion',
      created_by_id: user.data.id
    });
    await channel.create()
    channel.addMembers([user.data.id])
  })

  console.log("NEW USER CREATED with TOKEN: ", token);
  return Response.json({ message: 'Hello World' })
}