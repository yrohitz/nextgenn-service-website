import { prisma } from "../prisma/prisma";

interface CallbackData {
  name: string;
  phone: string;
  service: string;
  message?: string;
}

export class CallbackService {
  static async create(data: CallbackData) {
    return prisma.callbackRequest.create({
      data,
    });
  }

  static async getAll() {
    return prisma.callbackRequest.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  static async getById(id: string) {
    return prisma.callbackRequest.findUnique({
      where: {
        id,
      },
    });
  }

  static async delete(id: string) {
    return prisma.callbackRequest.delete({
      where: {
        id,
      },
    });
  }

  static async updateStatus(id: string, status: string) {
    return prisma.callbackRequest.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
  }
}