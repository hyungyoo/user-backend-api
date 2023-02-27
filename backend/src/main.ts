import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";
// import * as fs from "fs";
// import * as https from "https";

async function bootstrap() {
  // const httpsOptions = {
  //   cert: fs.readFileSync("path/to/cert.crt"),
  //   key: fs.readFileSync("path/to/key.key"),
  // };

  // const app = await NestFactory.create(AppModule, { httpsOptions });
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("Innovorder test")
    .setDescription("innovorder test with CRUD")
    .setVersion("1.0")
    .addTag("test")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}
bootstrap();
