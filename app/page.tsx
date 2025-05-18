 "use client";
import { useState } from "react";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/domain-input-card"
import {Button} from "@/components/ui/button";
import dayjs from "dayjs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"




export default function Home() {
  const [orgName, setOrgName] = useState("");
  const [outputFlag, setOutputFlag] = useState(false);
  const [registration, setRegistration] = useState("");
  const [expiration, setExpiration] = useState("");
  const [hostedOn,setHostedOn] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleRevert =  (e:React.MouseEvent<HTMLButtonElement>) => {
    setOutputFlag(false);
    setOrgName("");

  }
 
  const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement>) => {
        try {
            e.preventDefault();
            const res =  await fetch(`https://rdap.verisign.com/com/v1/domain/${orgName}`)
            const data = await res.json()

            setRegistration(dayjs(data?.['events']?.[0]?.['eventDate'])?.format("MM/DD/YYYY"));
            setExpiration(dayjs(data?.['events']?.[1]?.['eventDate'])?.format("MM/DD/YYYY"));
            setHostedOn(data?.['entities']?.[0]?.['vcardArray']?.[1][1][3]);
            setImgUrl(`https://logo.uplead.com/${orgName}`);
            

            console.log(data);
            console.log(registration);
            console.log(expiration);
            console.log(hostedOn);

            setOutputFlag(true)  ; 
            // to display the data in UI


            // if (data.events) {
            //     data.events.map((item:any) => {
            //         if (item.eventAction === "registration") {
            //             setRegistration(new Date(item.eventDate).toLocaleString())
            //         }
            //         if (item.eventAction === "expiration") {
            //             setExpire(new Date(item.eventDate).toLocaleString())
            //         }
            //     })
            // }
            // console.log(registration);
            // console.log(expire);
           
        } catch(err) {
            console.log(err);
        }
       
  }
  return (
    
   (!outputFlag ? (
   <Card>
        <CardHeader>
            <CardTitle>Domain Details Fetcher</CardTitle>
            <CardDescription>Retrieves Critical Domain Information</CardDescription>
        </CardHeader>
        <CardContent>
            <input type="text" placeholder = "Enter the URL visible to public"onChange={e => setOrgName(e.target.value)} value={orgName}/>
        </CardContent>
        <CardFooter>
            <Button onClick={handleSubmit}>Submit</Button>
        </CardFooter>
   </Card>

  ) :
   (
   <Card>
        <CardHeader>
            <CardTitle>Domain Details</CardTitle>
            <CardDescription>
              <img alt="domain logo"
                     height= "60pt"
                     src= {imgUrl}
                     width="60pt"/>
                <p>{orgName}</p>
            </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
                <TableRow>
                <TableCell className="font-medium">Registration Date</TableCell>
                <TableCell>{registration}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">Expiration Date</TableCell>
                <TableCell>{expiration}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">Hosted On</TableCell>
                <TableCell>{hostedOn}</TableCell>
                </TableRow>
            </TableBody>
           </Table>
        </CardContent>
        <CardFooter>
            <Button onClick={handleRevert}>Revert</Button>
        </CardFooter>
   </Card>

  )
 )
)
}