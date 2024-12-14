import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('d508b899-8aa5-4cfb-bfa1-5ba449ccaf9b', '1Luis.Robel62@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=3', 'ghi789jkl012', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('f0ae431c-b28d-4e15-bca2-1c5e16846ed6', '9Sabryna.Kovacek36@hotmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=11', 'abc123def456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('ffdcfb7f-412d-4ff0-a316-17200f130f3b', '17Anabel.Murazik@hotmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=19', 'yz567abc890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('6d6f2fad-a4ab-4c09-ada3-36836a91ba5f', '25Santino87@hotmail.com', 'Lisa Brown', 'https://i.imgur.com/YfJQV5z.png?id=27', 'yz567abc890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('552f3e36-6c2c-444f-ae9b-c4192d854eb4', '33Corene.Mueller76@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=35', 'yz567abc890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('5e22ccfe-95b3-4456-81d7-631025581667', '41Glenda83@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=43', 'ghi789jkl012', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('f0738113-4fa5-4f5f-b4fa-6ce3b07af2f9', '49Lisette_McLaughlin0@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=51', 'ghi789jkl012', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('120fa9fc-948c-4b39-b255-24e6ea3c7e70', '57Susie.Funk@yahoo.com', 'Mike Johnson', 'https://i.imgur.com/YfJQV5z.png?id=59', 'stu901vwx234', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('5f2622c1-9399-422a-8e41-44215a1ce616', '65Dolores_Kris-Senger@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=67', 'yz567abc890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('2f5a63fc-2b5d-4b60-9b2c-add517645706', 'User wants notifications for new AI recipe releases.', '120fa9fc-948c-4b39-b255-24e6ea3c7e70');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('50fe38bc-38af-4c79-833f-1d4ccf69ea2c', 'Subscription to updates on AI model performance improvements.', '5f2622c1-9399-422a-8e41-44215a1ce616');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('01ec486a-9546-443a-9c70-e45ba785b755', 'Subscribed to receive alerts on AI model downtime.', '552f3e36-6c2c-444f-ae9b-c4192d854eb4');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('4f11c8c4-55ad-4f52-9bc5-afea5f2b820f', 'User wants notifications for new AI recipe releases.', 'f0ae431c-b28d-4e15-bca2-1c5e16846ed6');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('d459a9ad-6d27-4e7d-88e6-8ba901090c0f', 'User wants notifications for new AI recipe releases.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('ae21bc47-1898-4d56-8246-6c060fd2efc9', 'Opted in for weekly tips on using AI models effectively.', '6d6f2fad-a4ab-4c09-ada3-36836a91ba5f');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('1eafa6f1-04a3-44ae-b642-2c3096cd3dc0', 'Subscription to updates on AI model performance improvements.', '120fa9fc-948c-4b39-b255-24e6ea3c7e70');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('a278579c-fca5-4c45-a778-9278af88b168', 'Opted in for weekly tips on using AI models effectively.', '5f2622c1-9399-422a-8e41-44215a1ce616');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('3dcfa605-c510-45b8-8e30-508c8fbca447', 'Subscription to updates on AI model performance improvements.', '5e22ccfe-95b3-4456-81d7-631025581667');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('2e66bc0f-a1f6-4ba2-a9ce-6f122efb8021', 'Subscribed to receive alerts on AI model downtime.', '6d6f2fad-a4ab-4c09-ada3-36836a91ba5f');

INSERT INTO "Chat" ("id", "userId") VALUES ('c64e0297-c55a-4db4-a679-349db351b37f', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Chat" ("id", "userId") VALUES ('3628cb58-d213-4eab-9c3b-8b2cc5f7f2e2', '120fa9fc-948c-4b39-b255-24e6ea3c7e70');
INSERT INTO "Chat" ("id", "userId") VALUES ('eb131e07-5f32-4388-a42d-63f4b878af56', '120fa9fc-948c-4b39-b255-24e6ea3c7e70');
INSERT INTO "Chat" ("id", "userId") VALUES ('2314a2e2-3368-4429-a141-f5b92c236162', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Chat" ("id", "userId") VALUES ('79096a6b-130a-4225-8ab2-2c97b5317196', '5e22ccfe-95b3-4456-81d7-631025581667');
INSERT INTO "Chat" ("id", "userId") VALUES ('c244426b-7876-443d-86b3-22ec42a76ca1', '5e22ccfe-95b3-4456-81d7-631025581667');
INSERT INTO "Chat" ("id", "userId") VALUES ('6735b4dc-7b58-40ef-9fca-f03d47539bee', '6d6f2fad-a4ab-4c09-ada3-36836a91ba5f');
INSERT INTO "Chat" ("id", "userId") VALUES ('aa8fb4a4-08ba-46a4-ba74-21aecba5c787', 'd508b899-8aa5-4cfb-bfa1-5ba449ccaf9b');
INSERT INTO "Chat" ("id", "userId") VALUES ('02642b08-1cdd-4710-b7e7-816a9bcc3a7c', '6d6f2fad-a4ab-4c09-ada3-36836a91ba5f');
INSERT INTO "Chat" ("id", "userId") VALUES ('8585a061-b5dd-4966-a870-faca5ad6cc91', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "AiModel" ("id", "name", "description", "version") VALUES ('1afed2a4-38ba-4aab-98aa-2419a6060cf2', 'ChatMaster 3000', 'A powerful AI model for document parsing and data extraction.', 'v2.3.1');
INSERT INTO "AiModel" ("id", "name", "description", "version") VALUES ('2d54457e-9f6d-4e8a-a428-504279587105', 'DocuAnalyser Pro', 'An advanced AI model for image recognition and analysis.', 'v2.3.1');
INSERT INTO "AiModel" ("id", "name", "description", "version") VALUES ('aa9abb4d-066f-47d6-b4e3-33094ba4e2fb', 'ContentCrafter AI', 'A powerful AI model for document parsing and data extraction.', 'v1.0.0');
INSERT INTO "AiModel" ("id", "name", "description", "version") VALUES ('d1f4156d-f543-4fa0-bde3-70dc28b28ebb', 'TranslateXpert', 'A specialized AI model for accurate and fast language translation.', 'v2.1.0');
INSERT INTO "AiModel" ("id", "name", "description", "version") VALUES ('b6c9862f-cab0-45f3-a440-ab054ae461aa', 'ChatMaster 3000', 'A specialized AI model for accurate and fast language translation.', 'v2.1.0');
INSERT INTO "AiModel" ("id", "name", "description", "version") VALUES ('d680dc9a-b4f8-433a-828a-1e32f68c2290', 'Visionary AI', 'A powerful AI model for document parsing and data extraction.', 'v3.0.2');
INSERT INTO "AiModel" ("id", "name", "description", "version") VALUES ('e79108af-d8dd-4f61-93c3-2253d3ac213d', 'Visionary AI', 'An AI model focused on generating creative and compelling content.', 'v2.1.0');
INSERT INTO "AiModel" ("id", "name", "description", "version") VALUES ('7dd10303-5c13-485a-ae1f-d44670a94385', 'DocuAnalyser Pro', 'An advanced AI model for image recognition and analysis.', 'v1.0.0');
INSERT INTO "AiModel" ("id", "name", "description", "version") VALUES ('6cc7b903-8c79-4827-9b8d-f6a6b48d046c', 'Visionary AI', 'A specialized AI model for accurate and fast language translation.', 'v1.0.0');
INSERT INTO "AiModel" ("id", "name", "description", "version") VALUES ('4a3ba985-b674-46c9-931b-f3354aea2920', 'Visionary AI', 'An AI model focused on generating creative and compelling content.', 'v1.5.4');

INSERT INTO "Recipe" ("id", "title", "description", "ingredients", "instructions", "userId") VALUES ('5972a928-7542-4b8a-909a-e23befa40bd2', 'Content Generation Wizard', 'Create eyecatching social media posts quickly.', 'Source language target language AI model', 'Upload your data set and choose analysis type.', '552f3e36-6c2c-444f-ae9b-c4192d854eb4');
INSERT INTO "Recipe" ("id", "title", "description", "ingredients", "instructions", "userId") VALUES ('c1f9003e-f2ec-4353-89f6-768b47791010', 'Quick Translation Guide', 'Translate text between multiple languages with ease.', 'Story idea writing style AI model', 'Upload your data set and choose analysis type.', 'f0ae431c-b28d-4e15-bca2-1c5e16846ed6');
INSERT INTO "Recipe" ("id", "title", "description", "ingredients", "instructions", "userId") VALUES ('10876aea-1d0d-4edf-8c56-910d53c83d65', 'Content Generation Wizard', 'Translate text between multiple languages with ease.', 'Source language target language AI model', 'Input your brand message and select visual assets.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Recipe" ("id", "title", "description", "ingredients", "instructions", "userId") VALUES ('3ac305d0-8ff2-4a3a-90f4-6bfb14acc818', 'Content Generation Wizard', 'Assist in crafting compelling narratives.', 'Story idea writing style AI model', 'Input your topic and let the AI generate content.', '552f3e36-6c2c-444f-ae9b-c4192d854eb4');
INSERT INTO "Recipe" ("id", "title", "description", "ingredients", "instructions", "userId") VALUES ('9239a3ed-d95e-4dc4-afad-4efbf438c7ec', 'Quick Translation Guide', 'Translate text between multiple languages with ease.', 'Text input AI model creativity', 'Input your brand message and select visual assets.', 'f0738113-4fa5-4f5f-b4fa-6ce3b07af2f9');
INSERT INTO "Recipe" ("id", "title", "description", "ingredients", "instructions", "userId") VALUES ('27fb9f4e-f7d4-4f12-b1a8-9fb915e31cbd', 'Content Generation Wizard', 'Translate text between multiple languages with ease.', 'Source language target language AI model', 'Input your brand message and select visual assets.', '5f2622c1-9399-422a-8e41-44215a1ce616');
INSERT INTO "Recipe" ("id", "title", "description", "ingredients", "instructions", "userId") VALUES ('73cc3e51-cb90-47e3-9ee1-658ccb55561a', 'Quick Translation Guide', 'Generate engaging content effortlessly.', 'Story idea writing style AI model', 'Upload your data set and choose analysis type.', 'f0ae431c-b28d-4e15-bca2-1c5e16846ed6');
INSERT INTO "Recipe" ("id", "title", "description", "ingredients", "instructions", "userId") VALUES ('9db2c7a6-9ec5-4e64-8de7-52571053763d', 'Data Analysis Pro', 'Create eyecatching social media posts quickly.', 'Data set analysis tools AI model', 'Provide a story idea and let the AI assist in writing.', '5e22ccfe-95b3-4456-81d7-631025581667');
INSERT INTO "Recipe" ("id", "title", "description", "ingredients", "instructions", "userId") VALUES ('337b4f3c-6ffc-4710-ad48-710d0edf3988', 'Creative Writing Assistant', 'Analyze data and extract meaningful insights.', 'Data set analysis tools AI model', 'Input your brand message and select visual assets.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Recipe" ("id", "title", "description", "ingredients", "instructions", "userId") VALUES ('c070591f-d9df-48de-b42a-3cc5921bd422', 'Social Media Post Creator', 'Create eyecatching social media posts quickly.', 'Text input AI model creativity', 'Select languages and input text for translation.', 'f0ae431c-b28d-4e15-bca2-1c5e16846ed6');

INSERT INTO "Folder" ("id", "name", "userId", "parentFolderId") VALUES ('611c1e52-0d80-4adc-a09e-d8f911ad91a3', 'Project Ideas', 'f0738113-4fa5-4f5f-b4fa-6ce3b07af2f9', NULL);
INSERT INTO "Folder" ("id", "name", "userId", "parentFolderId") VALUES ('b288e299-c830-4744-b497-2614134aaade', 'Personal Notes', '120fa9fc-948c-4b39-b255-24e6ea3c7e70', '611c1e52-0d80-4adc-a09e-d8f911ad91a3');
INSERT INTO "Folder" ("id", "name", "userId", "parentFolderId") VALUES ('d948e28d-ed50-4d20-9af2-0d12f275c335', 'Project Ideas', 'ffdcfb7f-412d-4ff0-a316-17200f130f3b', '611c1e52-0d80-4adc-a09e-d8f911ad91a3');
INSERT INTO "Folder" ("id", "name", "userId", "parentFolderId") VALUES ('81e9ae0c-b2f8-4c5d-b640-41e470c2a774', 'Client Feedback', 'd508b899-8aa5-4cfb-bfa1-5ba449ccaf9b', '611c1e52-0d80-4adc-a09e-d8f911ad91a3');
INSERT INTO "Folder" ("id", "name", "userId", "parentFolderId") VALUES ('82ec6645-5542-413f-98a1-77163228427c', 'Personal Notes', 'f0ae431c-b28d-4e15-bca2-1c5e16846ed6', 'b288e299-c830-4744-b497-2614134aaade');
INSERT INTO "Folder" ("id", "name", "userId", "parentFolderId") VALUES ('0c86513b-5503-436b-afe2-597f8d3bf6df', 'Research Papers', 'ffdcfb7f-412d-4ff0-a316-17200f130f3b', '81e9ae0c-b2f8-4c5d-b640-41e470c2a774');
INSERT INTO "Folder" ("id", "name", "userId", "parentFolderId") VALUES ('8bf6be4a-35e2-4328-b840-f8234903cb86', 'Project Ideas', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'd948e28d-ed50-4d20-9af2-0d12f275c335');
INSERT INTO "Folder" ("id", "name", "userId", "parentFolderId") VALUES ('a90c5a3c-4b93-4348-97e7-b5b85895da70', 'Client Feedback', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '81e9ae0c-b2f8-4c5d-b640-41e470c2a774');
INSERT INTO "Folder" ("id", "name", "userId", "parentFolderId") VALUES ('7f29d62e-0ecc-4d40-827a-b09e726b7201', 'Personal Notes', '120fa9fc-948c-4b39-b255-24e6ea3c7e70', '0c86513b-5503-436b-afe2-597f8d3bf6df');
INSERT INTO "Folder" ("id", "name", "userId", "parentFolderId") VALUES ('6176cb29-1b04-4db6-9879-ca6cc0f8de50', 'Project Ideas', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '611c1e52-0d80-4adc-a09e-d8f911ad91a3');

INSERT INTO "Message" ("id", "content", "chatId", "userId", "aiModelId") VALUES ('ea96b036-d47f-4ac5-a2f6-ff28c777fc9e', 'Translate this document into French please.', 'aa8fb4a4-08ba-46a4-ba74-21aecba5c787', 'f0ae431c-b28d-4e15-bca2-1c5e16846ed6', 'aa9abb4d-066f-47d6-b4e3-33094ba4e2fb');
INSERT INTO "Message" ("id", "content", "chatId", "userId", "aiModelId") VALUES ('116a7325-81ae-478e-9d9f-665ee72a93fb', 'Translate this document into French please.', '2314a2e2-3368-4429-a141-f5b92c236162', '6d6f2fad-a4ab-4c09-ada3-36836a91ba5f', 'b6c9862f-cab0-45f3-a440-ab054ae461aa');
INSERT INTO "Message" ("id", "content", "chatId", "userId", "aiModelId") VALUES ('6a3e79cf-05bc-4e28-ba62-f9080dda4111', 'Whats the weather like in New York today', 'eb131e07-5f32-4388-a42d-63f4b878af56', '5f2622c1-9399-422a-8e41-44215a1ce616', '7dd10303-5c13-485a-ae1f-d44670a94385');
INSERT INTO "Message" ("id", "content", "chatId", "userId", "aiModelId") VALUES ('d914cfe5-d8a7-4d25-8e4d-e6625900a3d2', 'Can you help me generate a report for last quarters sales', '8585a061-b5dd-4966-a870-faca5ad6cc91', '5f2622c1-9399-422a-8e41-44215a1ce616', '4a3ba985-b674-46c9-931b-f3354aea2920');
INSERT INTO "Message" ("id", "content", "chatId", "userId", "aiModelId") VALUES ('590faf2a-8c25-4af6-99b7-2553f387cbbe', 'Whats the weather like in New York today', '6735b4dc-7b58-40ef-9fca-f03d47539bee', 'f0738113-4fa5-4f5f-b4fa-6ce3b07af2f9', '2d54457e-9f6d-4e8a-a428-504279587105');
INSERT INTO "Message" ("id", "content", "chatId", "userId", "aiModelId") VALUES ('dda76ce1-03c0-447b-ab77-9ef778d54e38', 'Whats the weather like in New York today', 'eb131e07-5f32-4388-a42d-63f4b878af56', '5e22ccfe-95b3-4456-81d7-631025581667', 'aa9abb4d-066f-47d6-b4e3-33094ba4e2fb');
INSERT INTO "Message" ("id", "content", "chatId", "userId", "aiModelId") VALUES ('6168963d-250a-45e5-aff5-493d729b91f5', 'Can you help me generate a report for last quarters sales', 'aa8fb4a4-08ba-46a4-ba74-21aecba5c787', '120fa9fc-948c-4b39-b255-24e6ea3c7e70', '2d54457e-9f6d-4e8a-a428-504279587105');
INSERT INTO "Message" ("id", "content", "chatId", "userId", "aiModelId") VALUES ('f5d3302a-c564-4e97-a2fa-87ba7e70bc5e', 'Can you help me generate a report for last quarters sales', 'c244426b-7876-443d-86b3-22ec42a76ca1', '120fa9fc-948c-4b39-b255-24e6ea3c7e70', '4a3ba985-b674-46c9-931b-f3354aea2920');
INSERT INTO "Message" ("id", "content", "chatId", "userId", "aiModelId") VALUES ('77c354bf-351c-47d3-a763-0a8c2cef8acb', 'Whats the weather like in New York today', 'c244426b-7876-443d-86b3-22ec42a76ca1', 'ffdcfb7f-412d-4ff0-a316-17200f130f3b', '2d54457e-9f6d-4e8a-a428-504279587105');
INSERT INTO "Message" ("id", "content", "chatId", "userId", "aiModelId") VALUES ('87dd31de-5e1e-48b8-b7dc-a2ce35d644d3', 'Can you help me generate a report for last quarters sales', 'eb131e07-5f32-4388-a42d-63f4b878af56', 'f0738113-4fa5-4f5f-b4fa-6ce3b07af2f9', 'e79108af-d8dd-4f61-93c3-2253d3ac213d');

INSERT INTO "File" ("id", "name", "fileUrl", "fileType", "size", "userId", "folderId") VALUES ('d84cb04f-6e77-4f61-9729-755e1235b868', 'presentation_slide.pptx', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=242', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=243', 70, 'f0738113-4fa5-4f5f-b4fa-6ce3b07af2f9', '7f29d62e-0ecc-4d40-827a-b09e726b7201');
INSERT INTO "File" ("id", "name", "fileUrl", "fileType", "size", "userId", "folderId") VALUES ('ee247447-c538-449e-97dd-c18d4662dfc3', 'financial_statement.xlsx', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=247', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=248', 503, '5f2622c1-9399-422a-8e41-44215a1ce616', 'd948e28d-ed50-4d20-9af2-0d12f275c335');
INSERT INTO "File" ("id", "name", "fileUrl", "fileType", "size", "userId", "folderId") VALUES ('fa5768e3-4950-493c-91f5-b6c34f4b1ccf', 'project_report.pdf', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=252', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=253', 464, '120fa9fc-948c-4b39-b255-24e6ea3c7e70', '7f29d62e-0ecc-4d40-827a-b09e726b7201');
INSERT INTO "File" ("id", "name", "fileUrl", "fileType", "size", "userId", "folderId") VALUES ('37d866d4-0e56-49bf-9d8d-7a57f2927ae6', 'project_report.pdf', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=257', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=258', 887, 'd508b899-8aa5-4cfb-bfa1-5ba449ccaf9b', 'a90c5a3c-4b93-4348-97e7-b5b85895da70');
INSERT INTO "File" ("id", "name", "fileUrl", "fileType", "size", "userId", "folderId") VALUES ('e2077b6e-a8e6-4445-948e-400ad7c0c6de', 'presentation_slide.pptx', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=262', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=263', 709, 'd508b899-8aa5-4cfb-bfa1-5ba449ccaf9b', 'd948e28d-ed50-4d20-9af2-0d12f275c335');
INSERT INTO "File" ("id", "name", "fileUrl", "fileType", "size", "userId", "folderId") VALUES ('c54f98c6-742f-4a1a-9ba7-f7cf9faaf613', 'financial_statement.xlsx', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=267', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=268', 218, '5f2622c1-9399-422a-8e41-44215a1ce616', '0c86513b-5503-436b-afe2-597f8d3bf6df');
INSERT INTO "File" ("id", "name", "fileUrl", "fileType", "size", "userId", "folderId") VALUES ('f8a3c8cb-83e0-471f-829b-3521cbfdf5b6', 'vacation_photo.jpg', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=272', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=273', 952, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '0c86513b-5503-436b-afe2-597f8d3bf6df');
INSERT INTO "File" ("id", "name", "fileUrl", "fileType", "size", "userId", "folderId") VALUES ('04855152-55ab-4024-bf1a-afb9407585f9', 'project_report.pdf', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=277', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=278', 916, 'f0738113-4fa5-4f5f-b4fa-6ce3b07af2f9', '82ec6645-5542-413f-98a1-77163228427c');
INSERT INTO "File" ("id", "name", "fileUrl", "fileType", "size", "userId", "folderId") VALUES ('fb25708c-168e-49e6-a044-16f9fe9c9aa8', 'meeting_notes.docx', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=282', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=283', 870, 'f0ae431c-b28d-4e15-bca2-1c5e16846ed6', 'b288e299-c830-4744-b497-2614134aaade');
INSERT INTO "File" ("id", "name", "fileUrl", "fileType", "size", "userId", "folderId") VALUES ('fe0b9f33-2e9b-47b3-a17a-cabef7cbf854', 'presentation_slide.pptx', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=287', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=288', 514, '5f2622c1-9399-422a-8e41-44215a1ce616', 'd948e28d-ed50-4d20-9af2-0d12f275c335');

INSERT INTO "Feedback" ("id", "content", "rating", "userId") VALUES ('ceff0460-bc6e-489c-8928-b31fafbe1624', 'The platform is very userfriendly and intuitive.', 883, '6d6f2fad-a4ab-4c09-ada3-36836a91ba5f');
INSERT INTO "Feedback" ("id", "content", "rating", "userId") VALUES ('f1fa07d9-c3cb-4dee-870b-680eae70a542', 'The platform is very userfriendly and intuitive.', 74, 'ffdcfb7f-412d-4ff0-a316-17200f130f3b');
INSERT INTO "Feedback" ("id", "content", "rating", "userId") VALUES ('229e8b02-6a62-4f0a-bd99-223bee8e4d90', 'The file upload feature is a gamechanger for my workflow.', 8, '552f3e36-6c2c-444f-ae9b-c4192d854eb4');
INSERT INTO "Feedback" ("id", "content", "rating", "userId") VALUES ('63a368c1-9886-4b4f-84a6-1e8ad3b21b1c', 'The platform is very userfriendly and intuitive.', 136, '5f2622c1-9399-422a-8e41-44215a1ce616');
INSERT INTO "Feedback" ("id", "content", "rating", "userId") VALUES ('8db55720-ed05-4d13-958e-046e4b5c9323', 'Sometimes the response time is a bit slow.', 584, 'd508b899-8aa5-4cfb-bfa1-5ba449ccaf9b');
INSERT INTO "Feedback" ("id", "content", "rating", "userId") VALUES ('cca04169-eb0c-41ea-baa0-642e05e74b4e', 'The platform is very userfriendly and intuitive.', 837, 'f0738113-4fa5-4f5f-b4fa-6ce3b07af2f9');
INSERT INTO "Feedback" ("id", "content", "rating", "userId") VALUES ('0faba001-4097-4b48-9394-de409a783ca5', 'The file upload feature is a gamechanger for my workflow.', 527, 'd508b899-8aa5-4cfb-bfa1-5ba449ccaf9b');
INSERT INTO "Feedback" ("id", "content", "rating", "userId") VALUES ('9e15e4f9-187e-4f27-a350-8c2c260582a5', 'The file upload feature is a gamechanger for my workflow.', 372, 'f0ae431c-b28d-4e15-bca2-1c5e16846ed6');
INSERT INTO "Feedback" ("id", "content", "rating", "userId") VALUES ('cfe66f97-0ebb-42c1-945a-c91790e9410a', 'The recipes are very helpful for specific tasks.', 953, '552f3e36-6c2c-444f-ae9b-c4192d854eb4');
INSERT INTO "Feedback" ("id", "content", "rating", "userId") VALUES ('01dcba1f-f388-4cbf-b95e-a51423b3f0ff', 'The platform is very userfriendly and intuitive.', 591, 'ffdcfb7f-412d-4ff0-a316-17200f130f3b');

INSERT INTO "LearningResource" ("id", "title", "description", "contentUrl", "resourceType") VALUES ('58be4b51-83a1-4f05-a101-0c8879ab97cf', 'Introduction to Natural Language Processing', 'Learn the basics of processing and analyzing human language data.', 'https://i.imgur.com/YfJQV5z.png?id=323', 'Video');
INSERT INTO "LearningResource" ("id", "title", "description", "contentUrl", "resourceType") VALUES ('2f349512-917a-40ae-8ac1-473b7be1e6e2', 'Introduction to Natural Language Processing', 'Explore advanced techniques in machine learning for complex problemsolving.', 'https://i.imgur.com/YfJQV5z.png?id=328', 'Ebook');
INSERT INTO "LearningResource" ("id", "title", "description", "contentUrl", "resourceType") VALUES ('c44787d8-bd64-4953-9071-d6d479d5dd85', 'Deep Dive into Neural Networks', 'An indepth exploration of neural network architectures and their applications.', 'https://i.imgur.com/YfJQV5z.png?id=333', 'Ebook');
INSERT INTO "LearningResource" ("id", "title", "description", "contentUrl", "resourceType") VALUES ('58b186c1-ca8d-4562-a2dc-0c8d8cfc1ab5', 'Introduction to Natural Language Processing', 'An indepth exploration of neural network architectures and their applications.', 'https://i.imgur.com/YfJQV5z.png?id=338', 'Podcast');
INSERT INTO "LearningResource" ("id", "title", "description", "contentUrl", "resourceType") VALUES ('96332dbd-39bb-4736-9705-61d1bf0b3de4', 'Advanced Machine Learning Techniques', 'Discuss the ethical implications and societal impact of AI technologies.', 'https://i.imgur.com/YfJQV5z.png?id=343', 'Article');
INSERT INTO "LearningResource" ("id", "title", "description", "contentUrl", "resourceType") VALUES ('73d4130c-0b22-4155-91cc-a548fe57a7dd', 'Deep Dive into Neural Networks', 'An indepth exploration of neural network architectures and their applications.', 'https://i.imgur.com/YfJQV5z.png?id=348', 'Article');
INSERT INTO "LearningResource" ("id", "title", "description", "contentUrl", "resourceType") VALUES ('b00f87b5-9da2-4fce-bf30-cb69c1cb4e4b', 'AI Ethics and Society', 'An indepth exploration of neural network architectures and their applications.', 'https://i.imgur.com/YfJQV5z.png?id=353', 'Webinar');
INSERT INTO "LearningResource" ("id", "title", "description", "contentUrl", "resourceType") VALUES ('49b06aab-4c54-49af-bd0a-e91ec47e27eb', 'Deep Dive into Neural Networks', 'Explore advanced techniques in machine learning for complex problemsolving.', 'https://i.imgur.com/YfJQV5z.png?id=358', 'Ebook');
INSERT INTO "LearningResource" ("id", "title", "description", "contentUrl", "resourceType") VALUES ('9b8e15d5-31f1-47bd-999b-0d71b31c3989', 'Understanding AI Basics', 'Explore advanced techniques in machine learning for complex problemsolving.', 'https://i.imgur.com/YfJQV5z.png?id=363', 'Article');
INSERT INTO "LearningResource" ("id", "title", "description", "contentUrl", "resourceType") VALUES ('22713f7e-1304-4ceb-b6d2-55970eec0719', 'Deep Dive into Neural Networks', 'Explore advanced techniques in machine learning for complex problemsolving.', 'https://i.imgur.com/YfJQV5z.png?id=368', 'Podcast');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
