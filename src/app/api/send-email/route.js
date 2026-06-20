import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {

  const { email } = await req.json()

  try {

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Bem-vindo ao Clube World Wines 🍷',
      html: `
        <h1>Bem-vindo ao Clube World Wines</h1>

        <p>Seu cadastro foi realizado com sucesso.</p>

        <p>Você receberá novidades, ofertas exclusivas e seleções especiais.</p>

        <br/>

        <strong>Equipe World Wines 🍷</strong>
      `
    })

    return NextResponse.json({
      success: true
    })

  } catch (error) {

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )

  }
}