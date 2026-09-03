const { PutObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3");
const s3Client = require("../config/s3");

const uploadToS3 = async (file) => {
    const fileName = `${Date.now()}-${file.originalname}`;

    const command = new PutObjectCommand ({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `movies/${fileName}`,
        Body: file.buffer,
        ContentType: file.mimetype,
    })
    

    await s3Client.send(command);

    return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/movies/${encodeURIComponent(fileName)}`;

}

const deleteFromS3 = async (imageUrl) => {
    const key = new URL(imageUrl).pathname.substring(1);

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key,
    };

    const command = new DeleteObjectCommand(params);

    await s3Client.send(command);
};

module.exports = {
    uploadToS3,
    deleteFromS3
};
