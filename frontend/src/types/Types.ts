export type LayoutParamsType = {
  home?: boolean;
  search?: boolean;
  groupMessages?: boolean;
  history?: boolean;
  profile?: boolean;
  logout?: boolean;
  message?: boolean;
  isGroup?: boolean;
  userInformation?: boolean;
  blockedAccounts?: boolean;
  deleteAccount?: boolean;
};

export type MessageCardType = {
  data: {
    id: string;
    name: string;
    lastMessage: string;
    lastMessageDate: string;
    isGroup?: boolean;
    from?: string;
  };
};
export type HomeParams = LayoutParamsType & {
  children: React.ReactNode;
};
export type ViewSearchedPersonType = {
  id: string;
  name: string;
  lastMessage: string;
  lastMessageDate: string;
  bio: string;
};
export type GroupedMemberType = [
  {
    id: string;
    name: string;
    bio: string;
    lastMessageDate: string;
  }
];
export type SearchUserType = [
  {
    id: string;
    name: string;
    bio: string;
  }
];
export type GroupedUserType = {
  id: string;
  name: string;
  from: string;
  lastMessage: string;
  lastMessageDate: string;
  bio: string;
  isGroup: boolean;
  admin: string;
  members: GroupedMemberType;
};
