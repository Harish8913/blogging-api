export const authController = async (req, res) => {
    console.log("Hey there");
    return res.status(200).json({ message: "Harish" });
};
