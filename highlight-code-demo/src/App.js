import React from 'react';
import CodeBlock from './components/CodeBlock';

export default function App() {
  const code = {
    bash: 'curl -k https://192.168.1.1:30443/parityCheck?number=123 -H "Host: helloworld.com" -H "ApiKey: helloworld"',
    java: `import java.io.BufferedReader;
    import java.io.InputStreamReader;
    import java.net.HttpURLConnection;
    import java.net.URL;
    import java.nio.charset.StandardCharsets;
    import java.util.Base64;

    public class Main {

        public static void main(String[] args) throws Exception {
            String endpoint = "https://192.168.1.1:30443/parityCheck?number=123";
            String apiKey = "{appCode}";

            URL url = new URL(endpoint);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");
            con.setRequestProperty("Host", "helloworld.com");
            String encoded = Base64.getEncoder().encodeToString(apiKey.getBytes(StandardCharsets.UTF_8));
            con.setRequestProperty("ApiKey", encoded);

            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuilder response = new StringBuilder();
            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();

            System.out.println(response.toString());
        }
    }`,
    csharp: `using System;
    using System.IO;
    using System.Net;
    using System.Text;

    namespace HttpClient {
        class Program {
            static void Main(string[] args) {
                string endpoint = "https://192.168.1.1:30443/parityCheck?number=123";
                string apiKey = "{appCode}";

                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(endpoint);
                request.Method = "GET";
                request.Host = "helloworld.com";
                request.Headers["ApiKey"] = Convert.ToBase64String(Encoding.UTF8.GetBytes(apiKey));

                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                Stream stream = response.GetResponseStream();
                StreamReader reader = new StreamReader(stream, Encoding.UTF8);
                string content = reader.ReadToEnd();

                Console.WriteLine(content);
            }
        }
    }`,
    php: `<?php
    $endpoint = "https://192.168.1.1:30443/parityCheck?number=123";
    $apiKey = "{appCode}";

    $curl = curl_init();

    curl_setopt_array($curl, array(
      CURLOPT_URL => $endpoint,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 30,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => array(
        "Host: helloworld.com",
        "ApiKey: " . base64_encode($apiKey)
      ),
    ));

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
      echo "cURL Error #:" . $err;
    } else {
      echo $response;
    }
    ?>`,
    python: `import requests
    import base64

    endpoint = "https://192.168.1.1:30443/parityCheck?number=123"
    apiKey = "{appCode}"

    headers = {
        'Host': 'helloworld.com',
        'ApiKey': base64.b64encode(apiKey.encode()).decode()
    }

    response = requests.get(endpoint, headers=headers)

    print(response.text)
    `,
    objectivec: `#import <Foundation/Foundation.h>

    int main(int argc, const char * argv[]) {
        @autoreleasepool {
            NSString *endpoint = @"https://192.168.1.1:30443/parityCheck?number=123";
            NSString *apiKey = @"{appCode}";

            NSURLSessionConfiguration *config = [NSURLSessionConfiguration defaultSessionConfiguration];
            NSURLSession *session = [NSURLSession sessionWithConfiguration:config];
            NSURL *url = [NSURL URLWithString:endpoint];

            NSMutableURLRequest *request = [[NSMutableURLRequest alloc] initWithURL:url];
            request.HTTPMethod = @"GET";
            [request setValue:@"helloworld.com" forHTTPHeaderField:@"Host"];
            NSString *encodedApiKey = [[apiKey dataUsingEncoding:NSUTF8StringEncoding] base64EncodedStringWithOptions:0];
            [request setValue:encodedApiKey forHTTPHeaderField:@"ApiKey"];

            NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
                if (error) {
                    NSLog(@"Error: %@", error.localizedDescription);
                } else {
                    NSString *result = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
                    NSLog(@"Result: %@", result);
                }
            }];
            [dataTask resume];
            [session finishTasksAndInvalidate];
        }
        return 0;
    }`
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>在 React 中使用 highlight.js 和 Clipboard.js 实现代码高亮和复制功能</h1>
      <p>下面是一段 Bash 代码：</p>
      <CodeBlock language="bash" code={code.bash} />
      <p>下面是一段 Java 代码：</p>
      <CodeBlock language="java" code={code.java} />
      <p>下面是一段 C# 代码：</p>
      <CodeBlock language="csharp" code={code.csharp} />
      <p>下面是一段 PHP 代码：</p>
      <CodeBlock language="php" code={code.php} />
      <p>下面是一段 Python 代码：</p>
      <CodeBlock language="python" code={code.python} />
      <p>下面是一段 Objective-C 代码：</p>
      <CodeBlock language="objectivec" code={code.objectivec} />
    </div>
  );
}
