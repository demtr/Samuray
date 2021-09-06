export type postType = { id: number, message: string, lcount: number }

export type contactType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type photoType = {
    small: string | null
    large: string | null
}

export type profileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contactType
    photos: photoType
}

export type userType = {
    id: number
    name: string
    status: string | null
    photos: photoType
    followed: boolean
}
