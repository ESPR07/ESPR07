export type Response = {
  "info": {
    "name": string,
    "description": string,
    "picture": string,
  },
  "socials": {
    "Linkedin": string,
    "Github": string,
    "Email": string,
  }
  "skills": {
    "design": [
      {
        "skill": string,
        "logo": string,
        "link": string
      }
    ],
    "testing": [
      {
        "skill": string,
        "logo": string,
        "link": string
      }
    ],
    "coding": [
      {
        "skill": string,
        "logo": string,
        "link": string
      }
    ]
  },
  "projects": [
    {
      "title": string,
      "description": string,
      "github": string,
      "tag": string,
      "image_url": string
      "link": string,
      "mainColor": string,
      "buttonColor": string,
      "tech": [
        {
          "skill": string
        }
      ]
    }
  ]
}