import { Request, Response } from 'express';
import * as subjectService from '../subjects/subject_service.js';

export const createSubject = async (req: Request, res: Response) => {
    try {
      const subject = await subjectService.createSubject(req.body);
      res.status(201).json(subject);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const getSubjects = async (req: Request, res: Response) => {
    try {
      const subjects = await subjectService.getSubjects();
      res.json(subjects);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getSubjectById = async (req: Request, res: Response) => {
    try {
      const subject = await subjectService.getSubjectById(req.params.id);
      if (subject) {
        res.json(subject);
      } else {
        res.status(404).json({ error: "Assignatura no trobada" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const updateSubject = async (req: Request, res: Response) => {
    try {
      const updatedSubject = await subjectService.updateSubject(req.params.id, req.body);
      if (updatedSubject) {
        res.json(updatedSubject);
      } else {
        res.status(404).json({ error: "Assignatura no trobada" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const deleteSubject = async (req: Request, res: Response) => {
    try {
      const deletedSubject = await subjectService.deleteSubject(req.params.id);
      if (deletedSubject) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: "Assignatura no trobada" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const getSubjectAlumni = async (req: Request, res: Response) => {
    try {
      const alumni = await subjectService.getAlumniFromSubject(req.params.id);
      res.json(alumni);
    } catch (error: any) {
      res.status(404).json({ error: "Assignatura no trobada o error en obtenir alumnes" });
    }
  };