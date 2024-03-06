'use client'

import { useCallback, useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Loading from "../loading";
import * as z from 'zod'
import type { Database } from "../../../lib/database.types";
import useStore from "../../../store";
type Schema = z.infer<typeof schema>

// 入力データの検証ルールを定義
const schema = z.object({
  name: z.string().min(2, { message: '2文字以上入力する必要があります。' }),
  introduce: z.string().min(0),
})

const Post = () => {
  return (
    <div>hallow</div>
  )
}

export default Post
