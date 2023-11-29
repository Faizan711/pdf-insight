import Dashboard from "@/components/Dashboard";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Page = async () => {
  //check in Kinde
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if(!user || !user.id){
    redirect('/auth-callback?origin=dashboard')
  }

  //check in DB
  const dbUser = await db.user.findFirst({
    where:{
      id: user.id
    }
  })

  if(!dbUser){
    redirect('/auth-callback?origin=dashboard')
  }

  return (
    <Dashboard />
  );
};

export default Page;
