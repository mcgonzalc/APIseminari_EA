import Subject, { ISubject } from '../subjects/subject_models.js';
import User from '../users/user_models.js';

export const createSubject = async (subjectData: ISubject) => {
  const subject = new Subject(subjectData);
  return await subject.save();
};

export const getSubjects = async () => {
  return await Subject.find();
};

export const getSubjectById = async (id: string) => {
  return await Subject.findById(id);
};

export const updateSubject = async (id: string, subjectData: Partial<ISubject>) => {
  return await Subject.findByIdAndUpdate(id, subjectData, { new: true });
};

export const deleteSubject = async (id: string) => {
  return await Subject.findByIdAndDelete(id);
};

export const getAlumniFromSubject = async (subjectId: string) => {
  return await Subject.findById(subjectId).populate('alumni');
  //return subject?.alumni || [];
};