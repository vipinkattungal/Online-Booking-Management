import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), "public/uploads");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const form = new formidable.IncomingForm({
    uploadDir,
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: "Error parsing form data" });
    }

    try {
      const newCollege = await prisma.college.create({
        data: {
          name: fields.name as string,
          email: fields.email as string,
          password: fields.password as string,
          phone: fields.phone as string,
          address: fields.address as string,
          city: fields.city as string,
          state: fields.state as string,
          country: fields.country as string,
          pincode: fields.pincode as string,
          description: fields.description as string,
          website: fields.website as string,
          mapLocation: fields.mapLocation as string,
          logo: files.logo ? `/uploads/${path.basename(files.logo.path)}` : null,
          brochure: files.brochure ? `/uploads/${path.basename(files.brochure.path)}` : null,
          idVerification: files.idVerification ? `/uploads/${path.basename(files.idVerification.path)}` : null,
        },
      });

      res.status(201).json(newCollege);
    } catch (error) {
      console.error("Error creating college:", error);
      res.status(500).json({ message: "Error creating college" });
    }
  });
};

export default handler;