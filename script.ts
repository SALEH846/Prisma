import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// to see the queries which get invoked in the background by prisma for our program,
// we can use the following
// const prisma = new PrismaClient({ log: ["query"] });

async function main() {
	// -----------------------------------------------
	// to delete all the rows from the user table
	// await prisma.user.deleteMany();
	// -----------------------------------------------
	// create only one new entry in the user table
	// const user = await prisma.user.create({
	// 	data: {
	// 		name: "Saleh",
	// 		email: "saleh@prisma.dev",
	// 		age: 22,
	// 		// create a user preference
	// 		userPreference: {
	// 			create: {
	// 				emailUpdates: true,
	// 			},
	// 		},
	// 	},
	// 	// To include the created User Preference entry in the result which gets
	// 	// stored in the `user` variable which we are using for `console.log`
	// 	// We can also user `select` instead of `include` for more fine grained
	// 	// control
	// 	// include: {
	// 	// 	userPreference: true,
	// 	// },
	// 	// Use `select` for more fine grained control over the result which gets
	// 	// stored in the `user` varaible
	// 	// For instance, this will only return the name after creating entry in the `user`
	// 	// table and the `id` of the entry that it has created in the `userPreference`
	// 	// table
	// 	select: {
	// 		name: true,
	// 		userPreference: { select: { id: true } },
	// 	},
	// });
	// -----------------------------------------------
	// Create several entries in the `user` table
	// const users = await prisma.user.createMany({
	// 	data: [
	// 		{
	// 			name: "Hamza",
	// 			email: "hamza@criminology.ku",
	// 			age: 22,
	// 		},
	// 		{
	// 			name: "Haseeb",
	// 			email: "haseeb@agriculture.ku",
	// 			age: 23,
	// 		},
	// 	],
	// });
	// -----------------------------------------------
	// find a row based on column which is specified as `uniuqe`
	// In `findUnique` function, only the columns with the `unique` constraint on
	// them can be used for searching, the columns which don't have unique constraint
	// on them can't be used
	// const user = await prisma.user.findUnique({
	// 	where: {
	// 		// To find an entry based on the `email`
	// 		// email: "haseeb@agriculture.ku",
	// 		// we have also defined a unique constraint on the combination of both
	// 		// `age` and `name`, which we use like that
	// 		age_name: {
	// 			age: 22,
	// 			name: "Hamza",
	// 		},
	// 	},
	// 	// we can also use `select` and `include` inside here
	// });
	// -----------------------------------------------
	// If we want to find an entry based on any column, either it has unique constraint
	// or not then we can use `findFirst` function
	// If it find mulitple rows matching the criteria, then this function will return only
	// the first row
	// const user = await prisma.user.findFirst({
	// 	where: {
	// 		name: "Hamza",
	// 	},
	// });
	// -----------------------------------------------
	// If we want to find an entry based on any column, either it has unique constraint
	// or not then we can use `findMany` function
	// If it find mulitple rows matching the criteria, then this function will return all
	// the rows
	// const user = await prisma.user.findMany({
	// 	where: {
	// 		role: "BASIC",
	// 	},
	// 	// to get only the results which have distinct age
	// 	// distinct: ["age"],
	// 	// to get the limited number of rows back
	// 	// take: 2,
	// 	// to skip first `n` number of rows from the result
	// 	// skip: 1,
	// 	// to sort the results based on some column(s)
	// 	orderBy: {
	// 		// age: "asc", // ascending order
	// 		age: "desc", // descending order
	// 	},
	// });
	// -----------------------------------------------
	// Advanced Filtering
	// const user = await prisma.user.findMany({
	// 	where: {
	// 		// to query for the field to be equal to some value
	// 		name: { equals: "Abeer" },
	// 		// to query for the field to not be equal to some value
	// 		// name: { not: "Abeer" },
	// 		// to match the field against many values
	// 		// name: { in: ["Hamza", "Haseeb"] },
	// 		// to match the field against many values and get the rows don't have
	// 		// those values -- opposite of `in`
	// 		// name: { notIn: ["Hamza", "Haseeb"] },
	// 		// less than
	// 		// age: { lt: 23 },
	// 		// others -- gt, gte, lte
	// 		// match a part of the value
	// 		// email: { contains: ".ku" },
	// 		// others -- endsWith, startsWith
	// 		// using `AND` operator
	// 		// AND: [{ email: { contains: ".ku" } }, { name: { equals: "Hamza" } }],
	// 		// others -- OR, NOT
	// 	},
	// });
	// -----------------------------------------------
	// `update` function will only update the first record which it finds based on the
	// matching criteria
	// There is also `updateMany` function available which updates all the records it
	// finds based on the matching criteria
	// const user = await prisma.user.update({
	// 	where: {
	// 		email: "haseeb@agriculture.ku",
	// 	},
	// 	data: {
	// 		// pass the hardcoded value
	// 		// age: 19,
	// 		// we can also use mathematical operations
	// 		// increment, decrement, multiply, divide
	// 		age: {
	// 			increment: 1,
	// 		},
	// 	},
	// });
	// -----------------------------------------------
	// Connecting existing relationships
	// Create a new user Preference
	// const preference = await prisma.userPreference.create({
	// 	data: {
	// 		emailUpdates: true,
	// 	},
	// });
	// Take an existing user and connect it to the newly created preference
	// we can also disconnect an existing connection
	// This `connect` and `disconnect` functionality is also available in `create` function
	// const user = await prisma.user.update({
	// 	where: {
	// 		email: "haseeb@agriculture.ku",
	// 	},
	// 	data: {
	// 		userPreference: {
	// 			connect: {
	// 				// provide the id of the newly created preference
	// 				id: "ece04cd2-97c9-4716-ab37-cf8fe8d55a42",
	// 			},
	// 			// disconnect an existing relationship
	// 			// disconnect: true,
	// 		},
	// 	},
	// 	// include the `userPreference` in the return value
	// 	include: { userPreference: true },
	// });
	// -----------------------------------------------
	// delete a single field
	// const user = await prisma.user.delete({
	// 	where: {
	// 		email: "hamza@criminology.ku",
	// 	},
	// });
	// console.log(user);
}

main()
	.catch((e) => {
		console.error(e.message);
	})
	.finally(async () => {
		// Destroy the connection after the file has completed execution
		// otherwise prisma will create a new connection every time the file is executed
		await prisma.$disconnect();
	});
