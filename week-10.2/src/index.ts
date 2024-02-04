import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  password: string,
  firstName: string,
  lastName: string,
  email: string
) {
  const res = await prisma.user.create({
    data: {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    },
    select: {
      id: true,
      firstName: true,
      email: true,
    },
  });
  console.log(res);
}

// insertUser("password","robin", "singh", "robin@gmail.com");

interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  email: string,
  { firstName, lastName }: UpdateParams
) {
  try {
    const res = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        firstName: firstName,
        lastName: lastName,
      },
    });

    console.log(res);
  } catch (err) {
    console.log("error", err);
  }
}
// updateUser("robin@gmail.com", {firstName: "Robin", lastName: "Singh"})

async function getUser(email: string) {
  try {
    const res = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
// getUser("robin@gmail.com");

async function deleteUser(email: string) {
  try {
    const res = await prisma.user.delete({
      where: {
        email: email,
      },
    });
    console.log(res);
    console.log("user deleted");
    
  } catch (error) {
    console.log(error);
  }
}

deleteUser("robin@gmail.com");
