import { Request, Response } from "express";
import { CallbackService } from "../services/callback.service";

export class CallbackController {
  static async create(req: Request, res: Response) {
    try {
      const { name, phone, service, message } = req.body;

      if (!name || !phone || !service) {
        return res.status(400).json({
          success: false,
          message: "Name, Phone and Service are required.",
        });
      }

      const callback = await CallbackService.create({
        name,
        phone,
        service,
        message,
      });

      return res.status(201).json({
        success: true,
        message: "Callback request submitted successfully.",
        data: callback,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const callbacks = await CallbackService.getAll();

      return res.status(200).json({
        success: true,
        count: callbacks.length,
        data: callbacks,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }

  static async getById(req: Request<{ id: string }>, res: Response) {
    try {
      const id = req.params.id;

      const callback = await CallbackService.getById(id);

      if (!callback) {
        return res.status(404).json({
          success: false,
          message: "Callback not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: callback,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }

  static async delete(req: Request<{ id: string }>, res: Response) {
    try {
      const id = req.params.id;

      await CallbackService.delete(id);

      return res.status(200).json({
        success: true,
        message: "Callback deleted successfully.",
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }

  static async updateStatus(req: Request<{ id: string }>, res: Response) {
    try {
      const id = req.params.id;
      const { status } = req.body;

      if (!status) {
        return res.status(400).json({
          success: false,
          message: "Status is required.",
        });
      }

      const callback = await CallbackService.updateStatus(id, status);

      return res.status(200).json({
        success: true,
        message: "Status updated successfully.",
        data: callback,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
}