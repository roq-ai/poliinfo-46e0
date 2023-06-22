import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ContentInterface {
  id?: string;
  title: string;
  body: string;
  category: string;
  status: string;
  author_id: string;
  editor_id?: string;
  created_at?: any;
  updated_at?: any;

  user_content_author_idTouser?: UserInterface;
  user_content_editor_idTouser?: UserInterface;
  _count?: {};
}

export interface ContentGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  body?: string;
  category?: string;
  status?: string;
  author_id?: string;
  editor_id?: string;
}
